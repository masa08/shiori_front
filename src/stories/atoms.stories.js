import Button from '../components/atoms/Button.vue';

export default {
  title: 'Atoms',
};

export const ButtonComponents = () => ({
  render() {
    return <Button title="button" btnColor="success" />;
  },
});
