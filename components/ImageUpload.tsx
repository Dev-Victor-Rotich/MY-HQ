"use client";
import React, { useRef, useState } from "react";
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import config from "@/lib/config";
import Image from "next/image";
import { toast } from "sonner";

const {
  env: {
    imagekit: { publicKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`,
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;

    return { token, expire, signature };
  } catch (error: any) {
    throw new Error(`Authentication failed: ${error.message}`);
  }
};

const ImageUpload = ({
  onFileChange,
}: {
  onFileChange: (filePath: string) => void;
}) => {
  const ikUploadRef = useRef<any>(null);
  const [file, setFile] = useState<{ filePath: string | null }>({
    filePath: null,
  });

  const onError = (error: any) => {
    console.error(error);
    toast.error("Your file could not be uploaded. Please try again.");
  };

  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath);

    toast.success(`${res.filePath} uploaded successfully!`);
  };

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        className="hidden"
        ref={ikUploadRef}
        onError={onError}
        onSuccess={onSuccess}
        fileName="Work-ID.png" // You can make this dynamic if needed
      />
      <button
        className="upload-btn"
        onClick={(e) => {
          e.preventDefault();
          ikUploadRef.current?.click();
        }}
      >
        <Image
          src="/icons/upload.svg"
          alt="upload-icon"
          width={20}
          height={20}
          className="object-contain"
        />
        <p className="font-montagu">Upload a File</p>
        {file.filePath && <p className="upload-filename">{file.filePath}</p>}
      </button>
      {file.filePath && (
        <IKImage
          alt={file.filePath}
          path={file.filePath}
          width={500}
          height={300}
        />
      )}
    </ImageKitProvider>
  );
};

export default ImageUpload;

//The `ImageUpload` component begins with importing necessary libraries and components, including React hooks
// (`useState`, `useRef`), ImageKit components for image handling, and a toast notification library for user feedback.
// It then extracts configuration details like the public key and URL endpoint from a config file. The `authenticator`
// function is defined to fetch authentication details from the backend, ensuring secure uploads. The main `ImageUpload`
// component is structured to accept a callback function (`onFileChange`) that will be triggered with the uploaded file's path.
// Inside the component, `useState` is used to manage the state of the selected image (initially set to `null`), while `useRef`
// creates a reference to the hidden upload component, allowing it to be triggered programmatically. The component includes
// error handling through the `onError` function, which displays a toast notification if the upload fails, and success
// handling through the `onSuccess` function, which updates the state with the uploaded image's path, calls the
// `onFileChange` callback, and shows a success message. In return,
// the component provides a seamless user experience for uploading images
// , managing state effectively, and giving immediate feedback on the upload process.
