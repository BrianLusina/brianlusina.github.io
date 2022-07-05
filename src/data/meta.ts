import PicOne from '@images/pic01.jpg';
import PicTwo from '@images/pic02.jpg';
import PicThree from '@images/pic03.jpg';

// TODO: move this to a CMS to be able to change the data dynamically
const pages = [
  {
    title: 'Work',
    image: PicOne,
    description:
      '<p>Technology keeps moving forward, which makes it easier for artists to tell their stories and paint the pictures they want. I like to call it building engines with crayons and legos.<br /><br /> Find out more about my lego <i>engines</> <a href="https://folio.brianlusina.com">here</a></p>',
  },
  {
    title: 'Blog',
    image: PicTwo,
    description:
      '<p>This is where I write about my thoughts, work and experiences. People call it a blog, others call it articles, I just call it a journal. <br /><br /> Find out more about it <a href="https://blog.brianlusina.com">here</a></p>',
  },
  {
    title: 'About',
    iamge: PicThree,
    description:
      '<p>Hi there 👋🏿...<br /><br /> I am a Software Engineer who builds <i>stuff/engines</i> with crayons and legos for fun and <i>profit </i ></p>',
  },
];

const meta = { pages };

export default meta;
