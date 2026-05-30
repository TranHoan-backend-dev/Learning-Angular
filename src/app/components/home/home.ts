import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  DxButtonModule, 
  DxDataGridModule, 
  DxChartModule, 
  DxSelectBoxModule, 
  DxTextBoxModule, 
  DxCheckBoxModule 
} from 'devextreme-angular';
import notify from 'devextreme/ui/notify';

interface Employee {
  ID: number;
  FirstName: string;
  LastName: string;
  Position: string;
  BirthDate: string;
  HireDate: string;
  Salary: number;
  Address: string;
}

interface PositionDistribution {
  position: string;
  count: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    DxButtonModule,
    DxDataGridModule,
    DxChartModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxCheckBoxModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  employees: Employee[] = [
    {
      ID: 1,
      FirstName: 'John',
      LastName: 'Heart',
      Position: 'CEO',
      BirthDate: '1964/03/16',
      HireDate: '1995/01/15',
      Salary: 360000,
      Address: '351 S Hill St, Los Angeles, CA',
    },
    {
      ID: 2,
      FirstName: 'Olivia',
      LastName: 'Peyton',
      Position: 'Sales Assistant',
      BirthDate: '1981/06/03',
      HireDate: '2012/05/14',
      Salary: 55000,
      Address: '807 W 2nd St, Los Angeles, CA',
    },
    {
      ID: 3,
      FirstName: 'Robert',
      LastName: 'Reagan',
      Position: 'CMO',
      BirthDate: '1974/09/07',
      HireDate: '2002/11/08',
      Salary: 220000,
      Address: '4 W 21st St, New York, NY',
    },
    {
      ID: 4,
      FirstName: 'Greta',
      LastName: 'Sims',
      Position: 'HR Manager',
      BirthDate: '1977/11/22',
      HireDate: '1998/04/23',
      Salary: 120000,
      Address: '1700 Broadway, New York, NY',
    },
    {
      ID: 5,
      FirstName: 'Brett',
      LastName: 'Wade',
      Position: 'IT Manager',
      BirthDate: '1968/12/01',
      HireDate: '2009/03/06',
      Salary: 180000,
      Address: '2285 Peachtree Rd NE, Atlanta, GA',
    },
    {
      ID: 6,
      FirstName: 'Sandra',
      LastName: 'Johnson',
      Position: 'Software Engineer',
      BirthDate: '1988/10/12',
      HireDate: '2015/06/01',
      Salary: 135000,
      Address: '124 Peachtree St NW, Atlanta, GA',
    },
    {
      ID: 7,
      FirstName: 'Kevin',
      LastName: 'Carter',
      Position: 'Software Engineer',
      BirthDate: '1990/04/18',
      HireDate: '2017/02/15',
      Salary: 115000,
      Address: '1105 W Peachtree St NE, Atlanta, GA',
    },
    {
      ID: 8,
      FirstName: 'Cynthia',
      LastName: 'Stanwick',
      Position: 'HR Assistant',
      BirthDate: '1985/06/05',
      HireDate: '2008/03/24',
      Salary: 60000,
      Address: '200 Park Ave, New York, NY',
    }
  ];

  positions: string[] = ['All', 'CEO', 'CMO', 'HR Manager', 'IT Manager', 'Software Engineer', 'Sales Assistant', 'HR Assistant'];
  selectedPosition = 'All';
  showSalaryColumn = true;
  searchName = '';

  get filteredEmployees(): Employee[] {
    return this.employees.filter(emp => {
      const matchPosition = this.selectedPosition === 'All' || emp.Position === this.selectedPosition;
      const fullName = `${emp.FirstName} ${emp.LastName}`.toLowerCase();
      const matchName = !this.searchName || fullName.includes(this.searchName.toLowerCase());
      return matchPosition && matchName;
    });
  }

  get positionDistribution(): PositionDistribution[] {
    const dist: { [key: string]: number } = {};
    this.employees.forEach(emp => {
      dist[emp.Position] = (dist[emp.Position] || 0) + 1;
    });
    return Object.keys(dist).map(pos => ({
      position: pos,
      count: dist[pos]
    }));
  }

  onTestButtonClick(type: 'info' | 'success' | 'warning' | 'error', message: string) {
    notify(message, type, 3000);
  }

  onRowInserted(e: any) {
    notify('Đã thêm nhân viên mới thành công!', 'success', 2000);
  }

  onRowUpdated(e: any) {
    notify('Đã cập nhật thông tin nhân viên!', 'info', 2000);
  }

  onRowRemoved(e: any) {
    notify('Đã xóa nhân viên khỏi hệ thống!', 'warning', 2000);
  }
}
