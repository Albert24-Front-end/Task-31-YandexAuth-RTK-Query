import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Modal from 'react-modal';
import Input from '../UI/input/Input';
import Button from '../UI/Button/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useUpdatePostMutation } from '../../store/API/postApi';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root'); // Корневой элемент с id

const schema = yup.object({
  newPostText: yup.string().required('Обязательное поле'),
});

interface IUpdatePostForm {
  newPostText: string;
}

export const UpdatePostFormModal = ({ postId }: { postId: number }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      newPostText: '',
    },
  });

  const [updatePost, { data, isLoading }] = useUpdatePostMutation();

  useEffect(()=> {
    if(data?.status == 1) {
        closeModal()
    }
  }, [data])

  console.log('data', data);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // Логика, если нужно что-то выполнить после открытия модального окна
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onSubmit: SubmitHandler<IUpdatePostForm> = (data) => {
    updatePost({ post_id: postId, new_text: data.newPostText });
  };

  return (
    <div>
      <button onClick={openModal}>Редактировать</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="newPostText"
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Введите текст поста"
                isError={!!errors.newPostText}
                errorMessage={errors.newPostText?.message}
                {...field}
              />
            )}
          />
          <Button text="Подтвердить" type="submit" isLoading={isLoading} />
          <Button text="Закрыть" type="button" onClick={closeModal} />
        </form>
      </Modal>
    </div>
  );
};
