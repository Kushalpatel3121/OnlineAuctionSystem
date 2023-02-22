package com.example.backend.Helper;

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
    public boolean uploadFile(MultipartFile multipartFile)
    {
        boolean f = false;
        try{

/*
            InputStream inputStream = multipartFile.getInputStream();
            byte data[] = new byte[inputStream.available()];
            inputStream.read(data);

            FileOutputStream fileOutputStream = new FileOutputStream(UPLOAD_DIR + File.separator + multipartFile.getOriginalFilename() + new Date().getTime());
            fileOutputStream.write(data);
            fileOutputStream.flush();
            fileOutputStream.close();
*/
            this.fileName = new Date().getTime() + multipartFile.getOriginalFilename();
            Files.copy(multipartFile.getInputStream(),
                    Paths.get(UPLOAD_DIR + File.separator + this.fileName),
                    StandardCopyOption.REPLACE_EXISTING);
            f = true;
        }
        catch (Exception e){
            e.printStackTrace();
        }
        return f;
    }
}
