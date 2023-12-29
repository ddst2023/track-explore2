var LTV = {
  saveConfirmationData: function (retailerID, onSuccess, onFailure) {
    fetch("https://track-explore2.vercel.app/api/tracking-recorder", {
      method: "post",
      body: JSON.stringify({ retailerID, pageData: document.body.innerHTML }),
    })
      .then(function () {
        console.log("page persist success");
        onSuccess();
      })
      .catch(function () {
        console.log("page persist failed");
        onFailure();
      });
  },
};
