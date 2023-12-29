var LTV = {
  saveConfirmationData: function (retailerID, onSuccess, onFailure) {
    fetch("https://track-explore2.vercel.app/api/tracking-recorder", {
      method: "post",
      body: JSON.stringify({ pageData: document.body.innerHTML, retailerID }),
    })
      .then(onSuccess)
      .catch(onFailure);
  },
};
