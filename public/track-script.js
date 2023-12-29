fetch("https://track-explore2.vercel.app/api/tracking-recorder", {
  method: "post",
  body: JSON.stringify({ pageData: document.body.innerHTML }),
})
  .then(function resp1(res) {
    return res.json();
  })
  .then(function resp2(jsn) {
    console.log(jsn);
  });
