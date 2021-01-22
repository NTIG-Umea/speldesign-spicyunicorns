import Axios from 'axios';

export default class Hiscore {
  constructor (url) {
    this.instance = Axios.create({
      baseURL: url,
    });
  }

  postScore (gameID, score, name) {
    this.instance.post('/hiscore', {
      id: gameID,
      score: score,
      name: name.substring(0, 3)
    })
    .then(function (response) {
      console.log(response.data.msg);
    })  
    .catch(function (error) {
        console.log(error);
    });
  }

  getScore (gameID) {
    this.instance.get('/hiscore/' + gameID )
    .then(function (response) {
      // handle success
      console.log(response);
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    // .then(function () {
    //   // always executed
    // });
  }
}