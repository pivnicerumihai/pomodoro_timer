const useTimer = (timer) => {
  let time;

  if (timer / 10 < 1) {
    time = "00:0" + timer;
  } else if (timer / 60 < 1 && timer / 10 >= 1) {
    time = "00:" + timer;
  } else if (timer / 60 >= 1 && timer % 60 === 0) {
    time = Math.floor(timer / 60) + ":00";
  } else if (timer / 60 >= 1 && timer % 60 < 10) {
    time = Math.floor(timer / 60) + ":0" + Math.ceil(timer % 60);
  } else if (timer / 60 >= 1 && timer % 60 > 10) {
    time = Math.floor(timer / 60) + ":" + Math.ceil(timer % 60);
  } else {
    time = Math.floor(timer / 60) + ":" + Math.ceil(timer % 60);
  }
  return time;
};

export default useTimer;
