'use client' // is needed only if you’re using React Server Components
import React, { useEffect } from 'react';
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';
import { useRouter } from 'next/navigation';

type Props = {
  onUpload: (e: string) => any;
}

function UploadCareButton({ onUpload }: Props) {
  const router = useRouter();

const handleFileChange = (outputCollectionState: any) => {
  const { successEntries } = outputCollectionState;
  if (successEntries && successEntries.length > 0) {
    const fileInfo = successEntries[0];
    console.log("File Info:", fileInfo);  // Debug to ensure fileInfo is correct
    if (fileInfo && fileInfo.cdnUrl) {  // Check for fileInfo.info
      onUpload(fileInfo.cdnUrl);
      router.refresh();
    } else {
      console.error("File info or CDN URL missing in fileInfo:", fileInfo);  // Handle missing case
    }
  }
};

  

  return (
    <div>
      <FileUploaderRegular
        sourceList="local, camera, facebook, gdrive"
        cameraModes="photo, video"
        classNameUploader="uc-purple"
        pubkey="a8babd49b159a2e2d5cf"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default UploadCareButton;