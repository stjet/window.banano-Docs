# window.banano docs
## request_payment
User gets a popup window where they can authorize a payment. Site **should not assume payment happened** and check for a payment themselves. Therefore, returns nothing.
### Parameters
- to_address: string
- amount: number
## request_rep_change
User gets a popup window where they can change their representative to the requested address. Site **should not assume rep change happened** and confirm themselves. Therefore, returns nothing.
### Parameters
- to_address: string
## request_address
User gets a popup window where they can agree to sign a message, and share their address with the site. Returns nothing, but see `banano_link` event below.
### Parameters
None

## banano_link event
Event.

Format:
```
{
  address,
  signed_message,
  hashed_message,
  original_message
}
```

Code example:
```js
window.addEventListener("message", function(e) {
  if (e.data.type === "banano_link") {
    document.getElementById("link-info").innerText = "Address received: "+e.data.content.address;
  document.getElementById("sig-info").innerText = "Signature information (not verified by this site, but can be for proof of ownership of address): "+e.data.content.signed_message+" (hashed message: "+e.data.content.hashed_message+", original message: "+e.data.content.original_message+")";
  }
});
```