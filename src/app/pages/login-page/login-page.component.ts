import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { HttpResponse } from "@angular/common/http";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {
  constructor(private authservice: AuthService) {}

  ngOnInit() {}

  onLoginButtonClicked(email: string, password: string) {
    this.authservice
      .login(email, password)
      .subscribe((res: HttpResponse<any>) => {
        console.log(res);
      });
  }
}
