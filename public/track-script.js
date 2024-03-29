var LTV = {
  saveConfirmationData: function (retailerID, data, onSuccess, onFailure) {
    fetch("https://track-explore2.vercel.app/api/tracking-recorder", {
      method: "post",
      body: JSON.stringify({ data, retailerID }),
    })
      .then(function () {
        console.log("page persist success", { data });
        onSuccess?.();
      })
      .catch(function () {
        console.log("page persist failed", { data });
        onFailure?.();
      });
  },
};
