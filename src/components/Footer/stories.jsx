import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: '<p><a href="https://www.google.com">Feito com ❤ por Matheus Santos</a></p>',
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
