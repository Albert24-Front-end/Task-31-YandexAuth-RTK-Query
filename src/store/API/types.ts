export interface IUser {
  mail: string;
  phone_number: string;
  user_id: number;
  name: string;
  reg_date: Date;
  city: string;
}

export interface IPost {
    main_text: string;
    user_id: number;
    id: number;
    reg_date: Date;
    user_fk: IUser;
    photos: [
      {
        photo_id: number
        photo_url: string;
      }
    ];
    comments: string[];
}

export interface IGetUserResponse {
  status: number;
  message: IUser;
}

export interface ILoginUserPayload {
  email: string;
  password: string;
}

export interface ILoginUserResponse {
  status: 1 | 0;
  user_id: number;
  message: string;
}

export interface IRegisterUserPayload {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  user_city: string;
}

export interface IRegisterUserResponse extends ILoginUserResponse {}

export interface IGetPostbyIdResponse {
  status: number;
  message: IPost;
}

export interface IGetAllPostsResponse {
  status: number;
  message: IPost[];
}

export interface ICreatePostResponse {
  status: number;
  post_id: number;
}

export interface ICreatePostPayload {
  user_id: number;
  main_text: string;
}

export interface IUpdatePostResponse {
  status: number;
  message: string;
}

export interface IUpdatePostPayload {
  post_id: number;
  new_text: string;
}

export interface IDeletePostResponse extends IUpdatePostResponse {}

export interface ISubscriber {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  }
}

export type IGetSubscribersResponse = ISubscriber[]

// interface позволяет наследовать типы из другого interface, а type так не может. Interface можно расширять таким образом  