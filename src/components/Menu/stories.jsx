import { Menu } from '.';
import linksMock from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: 'http://www.google.com.br',
      srcImg: '',
    },
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
