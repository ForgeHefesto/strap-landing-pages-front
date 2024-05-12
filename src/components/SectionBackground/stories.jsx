import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea at
          reiciendis expedita provident odit voluptate dolore pariatur nesciunt
          debitis praesentium, quisquam culpa quas neque minus commodi magnam
          sint illum voluptatibus.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
