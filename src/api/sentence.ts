import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

// TODO: sentenceの型を定義する
const getSentences = async (): Promise<any> => {
  const sentenceUrl = process.env.VUE_APP_HOST + '/api/sentence';

  try {
    const sentenceRes = await axios.get(sentenceUrl);
    const sentences = camelcaseKeys(sentenceRes.data.sentences);

    return sentences;
  } catch (e) {
    alert(e);
  }
};

// TODO: sentenceの型を定義する
const getSentencesByUserId = async (userId: number): Promise<any> => {
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
