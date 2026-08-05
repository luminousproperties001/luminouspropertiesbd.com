import { useDropzone } from "react-dropzone";

export default function ImageUploader({
  onFiles,
}) {
  const { getRootProps, getInputProps } =
    useDropzone({
      accept: {
        "image/*": [],
      },
      multiple: true,
      onDrop: (acceptedFiles) => {
        onFiles(acceptedFiles);
      },
    });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-green-500 rounded-xl p-10 text-center cursor-pointer hover:bg-green-50 transition"
    >
      <input {...getInputProps()} />

      <h2 className="text-lg font-semibold">
        Drag & Drop Images Here
      </h2>

      <p className="text-gray-500 mt-2">
        অথবা Click করে ছবি নির্বাচন করুন
      </p>
    </div>
  );
}