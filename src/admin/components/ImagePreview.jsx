export default function ImagePreview({
  files,
  removeImage,
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {files.map((file, index) => (
        <div
          key={index}
          className="relative"
        >
          <img
            src={URL.createObjectURL(file)}
            alt=""
            className="rounded-xl h-40 w-full object-cover"
          />

          <button
            type="button"
            onClick={() => removeImage(index)}
            className="absolute top-2 right-2 bg-red-600 text-white w-7 h-7 rounded-full"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}