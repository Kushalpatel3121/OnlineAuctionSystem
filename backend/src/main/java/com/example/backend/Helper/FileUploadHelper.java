package com.example.backend.Helper;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Date;

@Component
public class FileUploadHelper {
    public final String UPLOAD_DIR = "C:\\Users\\vivek\\Desktop\\OnlineAuctionSystem\\backend\\src\\main\\resources\\Static\\image\\product";
    public String fileName = null;
    public ResponseEntity uploadFile(MultipartFile multipartFile)
    {
        boolean f = false;
        if(!multipartFile.getContentType().startsWith("image/"))
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please upload image file");
        }
        try{
            this.fileName = new Date().getTime() + multipartFile.getOriginalFilename();
            Files.copy(multipartFile.getInputStream(),
                    Paths.get(UPLOAD_DIR + File.separator + this.fileName),
                    StandardCopyOption.REPLACE_EXISTING);
            f = true;
        }
        catch (Exception e){
            e.printStackTrace();
        }
        return ResponseEntity.ok("Success");
    }
}
