var LTV = {
  saveConfirmationData: function (retailerID, onSuccess, onFailure) {
    const data = { retailerID, pageData: document.body.innerHTML };
    fetch("https://track-explore2.vercel.app/api/tracking-recorder", {
      method: "post",
      body: JSON.stringify(data),
    })
      .then(function () {
        console.log("page persist success", { data });
        onSuccess();
      })
      .catch(function () {
        console.log("page persist failed", { data });
        onFailure();
      });
  },
};
