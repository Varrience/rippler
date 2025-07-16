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
