
window
  .podlovePlayer("#app", "episode.json", "config.json")
  .then((store) => {

    document.getElementById("stop-player").addEventListener("click",  () =>{
          store.dispatch({
            type: "PLAYER_STOP"
          });
    });
    store.subscribe(() => {
      const { lastAction } = store.getState();
      console.log(lastAction);
    });

  });
