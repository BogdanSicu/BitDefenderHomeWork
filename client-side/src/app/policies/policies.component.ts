import { Component, OnInit } from '@angular/core';
import { PoliciesService } from '../services/policies-service';
import { PolicyModel } from '../models/policy-model';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {

  policyList: PolicyModel[] = [];

  constructor(private policiesService: PoliciesService) { }

  ngOnInit(): void {
      console.log(this.policiesService.getAllPolicies().subscribe( response => {
        this.policyList = response;
      }
    ))
  }

}
