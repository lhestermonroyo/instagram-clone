import Avatar from './resource/avatar.png';
import Img1 from './resource/1.png';
import Img2 from './resource/2.png';
import Img3 from './resource/3.png';
import Img4 from './resource/4.png';
import Img5 from './resource/5.png';

function randomAvatar() {
  let textArray = ['men', 'women'];
  const randomGender = textArray[Math.floor(Math.random() * textArray.length)];
  const randomNumber = Math.floor(Math.random() * 50);

  return `https://randomuser.me/api/portraits/${randomGender}/${randomNumber}.jpg`;
}

function randomImages() {
  const randomNumber = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/id/${randomNumber}/500/500`;
}

export const profileData = {
  username: 'johndoe',
  fullname: 'John Doe',
  avatarUrl: Avatar,
};

export const suggestionData = [
  {
    username: 'user.one',
    avatarUrl: randomAvatar(),
  },
  {
    username: 'user.two',
    avatarUrl: randomAvatar(),
  },
  {
    username: 'user.three',
    avatarUrl: randomAvatar(),
  },
  {
    username: 'user.four',
    avatarUrl: randomAvatar(),
  },
  {
    username: 'user.five',
    avatarUrl: randomAvatar(),
  },
];

export const feedData = [
  {
    avatarUrl: randomAvatar(),
    username: 'Random User',
    location: 'Iloilo City',
    ownPost: true,
    imagesPosted: [Img1, Img2, Img3, Img4, Img5],
    timePosted: '2019-11-22 09:55:45',
    caption: 'This is my first ever post.',
    likes: ['John Doe', 'Mark Doe', 'Shawn Doe'],
    comments: [
      {
        username: 'John Doe',
        comment: 'Cool!',
        timeCommented: '2021-03-02 19:16:07',
      },
      {
        username: 'Shawn Doe',
        comment: 'Damn how did you do this?!',
        timeCommented: '2020-08-28 12:36:50',
      },
    ],
  },
  {
    avatarUrl: randomAvatar(),
    username: 'Random User 2',
    location: null,
    ownPost: true,
    imagesPosted: [randomImages(), randomImages()],
    timePosted: '2019-11-22 09:55:45',
    caption: 'This is my first ever post.',
    likes: ['John Doe', 'Mark Doe', 'Shawn Doe'],
    comments: [
      {
        username: 'John Doe',
        comment: 'Cool!',
        timeCommented: '2021-03-02 19:16:07',
      },
      {
        username: 'Shawn Doe',
        comment: 'Damn how did you do this?!',
        timeCommented: '2020-08-28 12:36:50',
      },
    ],
  },
];
