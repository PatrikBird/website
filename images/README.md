# Cloudinary - Manual image uploading

1. Place images inside this images folder
2. Set your Cloudinary URL

```bash
export CLOUDINARY_URL={YOUR_TOKEN}
```

3. Run `pnpm upload:images`

curl https://api.cloudinary.com/v1_1/demo/image/upload -X POST -F 'file=@/path/to/sample.jpg' -F 'timestamp=173719931' -F 'api_key=436464676' -F 'signature=a781d61f86a6f818af'