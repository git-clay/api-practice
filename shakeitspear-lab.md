# Shake It Spear API - work in pairs

### Part I: Make API calls in the browser
- API: http://shakeitspeare.com/
- Example site built with this API: http://zebgirouard.com/shakeitspeare/
- Check out the API docs & find the endpoints:
  - What are they?
  - How many are there?
  - When you construct queries, what data does each endpoint return to you?
- *Note:* There is an unlisted query string for poems: `lines` - value can be 1-30
  - Example: http://shakeitspeare.com/api/poem?lines=20
- Make calls in the browser using each endpoint

### Part II: Make API calls from your website
- What you will be building: an html website with two buttons: `poem` and `sentence`. Depending on the button clicked, the website will make a call to a different endpoint.
- Make a directory & create a new HTML file and a new JS file
- Start by creating an HTML button with an event listener that simply logs 'Hello' (just to make sure things are functioning).
- Next, build your AJAX method & a hard-coded query and log the response data.
- Now, build two buttons, `poem` and `sentence`.
- Depending on what the user clicks, make an API call to the appropriate endpoint, log the response data, parse it into variables and append them to the page using JS
- Finally, build an input box for the poem `lines` query string.
