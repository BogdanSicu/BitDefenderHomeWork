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
    this.policiesService.getAllPolicies().subscribe( response => {
        this.policyList = response;
      }
    )
  }

  clonePolicy(clonedPolicy: PolicyModel) {
    this.policiesService.postClonedPolicy(clonedPolicy).subscribe(
        window.location.reload()
    );
  }

  deletePolicy(policyId: number) {
    this.policiesService.deletePolicy(policyId).subscribe(
      window.location.reload()
    )
  }

  patchPolicy(patchedPolicy: PolicyModel) {
    this.policiesService.patchPolicy(patchedPolicy).subscribe(
      window.location.reload()
    )
  }

}
