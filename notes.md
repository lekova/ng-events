# NgEventsApp Notes

### Fix bootstrap white issue by copying
```
node_modules/ng2f-bootstrap/dist/bootstrap.min.css
node_modules/toastr/build/toastr.min.css
```
to
```
"styles": [
  "../node_modules/ng2f-bootstrap/dist/bootstrap.min.css",
  "../node_modules/toastr/build/toastr.min.css",
  "styles.css"
],
```

### Fix failed to compile issue
```
Edit app.module.ts while `ng serve` is running
```