import Button from '../components/atoms/Button.vue';

export default {
  title: 'Atoms',
};

export const withJSX = () => ({
  render() {
    return <Button title="button" btnColor="success" />;
  },
});
