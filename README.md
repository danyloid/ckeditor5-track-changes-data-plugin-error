# ckeditor5-track-changes-data-plugin-error

This repo contains a repro of an issue with CKEditor5 Track Changes Data plugin.
This example follows a [Track Changes - Saving data without suggestions](https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/track-changes/track-changes-data.html) guide.

As long as the editor contains any suggestions, any attempt to get data with accepted suggestions
```
const data = await editor.plugins.get( 'TrackChangesData' ).getDataWithAcceptedSuggestions();
```

results in the following error:
```
CKEditorError: commentsrepository-duplicated-comment-thread-id {"threadId":"e644793801326b778482864dc0251d025"}
Read more: https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html#error-commentsrepository-duplicated-comment-thread-id
```


## Additional context

This project was bootstrapped with [Vite](https://vitejs.dev/guide/), using the `react-ts` template.

## Running the app locally

### Prerequisites

- [Node.js](https://nodejs.org/en) version 18+. 20+., version requirement is driven by [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
- CKEditor 5 with SaaS Collaborative Editing plugins license key, WS URL and valid token.

### Running the app

Update the `.env` file with your CKEditor5 license key, WS URL and token.

Install dependencies:

```bash
yarn
```

Run the application in DEV mode

```bash
yarn dev
```

Assuming default configration & port is available the app will be served at [http://localhost:5173/](http://localhost:5173/)

### Reproducing the problem

1. Enable Track Changes mode in editor toolbar.
2. Edit the content.
3. Press 'Get data with accepted suggestions' button.
