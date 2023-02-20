package com.example.backend.Controller;

import com.example.backend.Helper.FileUploadHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class FileUploadController {

    @Autowired
    private FileUploadHelper fileUploadHelper;

    @PostMapping("upload-file")
    public ResponseEntity<String> uploadFile(@RequestParam("productImage")MultipartFile file)
    {
        if(file.isEmpty())
        {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("File is not uploaded");
        }
        System.out.println(file.getContentType());
        if(!file.getContentType().startsWith("image/"))
        {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("File type is not image.");
        }
        else{
            try{
                boolean check = fileUploadHelper.uploadFile(file);
                if(check)
                    return ResponseEntity.ok("File uploaded successfully");
                else
                    return ResponseEntity.internalServerError().body("Server error while uploading file");
            }
            catch (Exception e)
            {
                e.printStackTrace();
            }
        }

        return ResponseEntity.ok("working");
    }
}
