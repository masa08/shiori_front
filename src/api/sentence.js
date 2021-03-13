import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

const getSentences = async () => {
  const sentenceUrl = process.env.VUE_APP_HOST + '/api/sentence';

  try {
    const sentenceRes = await axios.get(sentenceUrl);
    const sentences = camelcaseKeys(sentenceRes.data.sentences);

    return sentences;
  } catch (e) {
    alert(e);
  }
};

const getSentencesByUserId = async (userId) => {
  const sentenceUrl =
    process.env.VUE_APP_HOST + `/api/sentence?user_id=${userId}`;

  try {
    const sentenceRes = await axios.get(sentenceUrl);
    const sentences = camelcaseKeys(sentenceRes.data.sentences);

    return sentences;
  } catch (e) {
    alert(e);
  }
};

export { getSentences, getSentencesByUserId };
