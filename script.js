if (!window.banano) {
  document.getElementById("warning").style.display = "block";
}

function requestPayment() {
  let to_address = document.getElementById("address-1").value;
  let amount = Number(document.getElementById("amount").value);
  window.banano.request_payment(to_address, amount);
}

function requestChange() {
  let to_address = document.getElementById("address-2").value;
  window.banano.request_rep_change(to_address);
}

function requestAddress() {
  window.banano.request_address();
}

//receive response for requestAddress
window.addEventListener("message", function(e) {
  if (e.data.type === "banano_link") {
    document.getElementById("link-info").innerText = "Address received: "+e.data.content.address;
  document.getElementById("sig-info").innerText = "Signature information (not verified by this site, but can be for proof of ownership of address): "+e.data.content.signed_message+" (hashed message: "+e.data.content.hashed_message+", original message: "+e.data.content.original_message+")";
  }
});
