import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { HttpResponse } from "@angular/common/http";

@Component({
  selector: "app-signup-page",
  templateUrl: "./signup-page.component.html",
  styleUrls: ["./signup-page.component.scss"]
})
export class SignupPageComponent implements OnInit {
  constructor(private authservice: AuthService) {}

  ngOnInit() {}

  onSignupButtonclicked(email: string, password: string) {
    this.authservice
      .login(email, password)
      .subscribe((res: HttpResponse<any>) => {
        console.log(res);
      });
  }
}
