# smileAmazon_linkReplacer.js
I found myself not using smile.amazon to push donations, so I made this bookmarklet.
This script will strip out referral link data and replace the "www" with "smile" for any amazon site you are viewing.

the Bookmarklet:

javascript:(function()%7Bvar%20url%20%3D%20window.location.href%3B%20if(%2Famazon%2F.test(url)%20%3D%3D%3D%20true)%7B%20var%20newUrl%20%3D%20url.replace(%2F%5C%2Fwww%5C.%2F%2C%20'%2Fsmile.').replace(%2Fref%3D.%2B%2Fg%2C%20'')%3B%20window.open(newUrl%2C%20'_self')%3B%20%7D%7D)()
