# Read this before using the API
## Authors 
- ### @Varrience,
- ### @ABICAM STUDIOS
## Version: 0.42
## DATEBY: 09/14/2023
## UPDATED: 07/13/2025 
## SUPPORTS: APPLAB & GAMELAB
## Example:
 - Send a request by using an object by using loadImage or loading pixels from a specific canvas if you don't have one
### Inline code request
```js
// Gamelab
 loadImage(yourBackend + "request?data=" + encodeURI(request), function(iamge: object) {
 })
// Applab
 drawImageURL(yourBackend + "request?data=" + encodeURI(request), function(load: boolean) {
 })
```
### Example Format for request encoding
```json
{
  "Method": "GET",
  "Url": "https://photop.exotek.co/posts",
  "Body": {
    "param1": "param1Data"
  },
  "Headers": {
    "Authorization": "bearertoken1"
  }
}
```
## FAQ
- Q: I keep getting garbage out responses to my requests
- A: If your using a privacy focused browser this may cause issues! Many secure browsers randomize pixel values to prevent image fingerprinting via canvas or image displays if you trust the site your running this on or are using your own make sure to relax privacy features otherwise data will never be transcoded correctly
