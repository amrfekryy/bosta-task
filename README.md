This is a task for Bosta.

### Features
- The UI is completely responsive. I used `Material UI`.
- I have implemented am additional dark mode for the theme.
- I have implemented two language versions (Arabic and English) using `react-i18next`.
- I have implemented a search input which can be used to track any shipment by number.

### A note for reviewers from Bosta
Hi there, please be aware that the task doesn't handle all possible cases for shipment states. I was only provided with 4 tracking numbers all of which have a current status of "delivered". I have implemented two mock cases, one is for a warning (yellow stepper color) where the status is "WAITING_FOR_CUSTOMER_ACTION", and the other is for a canceled shipment (red stepper color) where I used the status "CANCELED" as the current status. You can find the 4 provided numbers and the two mock cases in a dropdown when you click the search input. Feel free to try other numbers but they may cause UI bugs like wrong shipment status, or untranslated text in the details table. thank you.
