import Button from '../components/atoms/Button.vue';

export default {
  title: 'Button',
};

// export const withText = () => ({
//   components: { MyButton },
//   template: '<my-button @click="action">Hello Button</my-button>',
//   methods: { action: action('clicked') },
// });

export const withJSX = () => ({
  render() {
    return <Button title="button" btnColor="success" />;
  },
});

// export const withSomeEmoji = () => ({
//   components: { MyButton },
//   template: '<my-button>😀 😎 👍 💯</my-button>',
// });
