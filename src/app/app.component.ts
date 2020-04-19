import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { AppUsers } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Admin-Portal';
  
  public users = [];
  public selectedUser : AppUsers;

  constructor( private _UsersService : UsersService) {
  }

  ngOnInit(): void {
    this._UsersService.getUsers().subscribe( data => this.users = data);
  }

  selectUser(user : AppUsers){
    this.selectedUser = user;
  }

  myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
}
