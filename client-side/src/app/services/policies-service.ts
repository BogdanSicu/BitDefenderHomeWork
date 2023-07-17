import { Injectable } from "@angular/core";
import { PolicyModel } from "../models/policy-model";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

@Injectable({providedIn: "root"})
export class PoliciesService {

    private baseUrl: String = "http://localhost:3000";

    constructor(private http: HttpClient) {

    }

    getAllPolicies(): Observable<PolicyModel[]> {
        return this.http.get(this.baseUrl + "/api/v1/get-policies")
        .pipe(
            map(
                response => {
                    return this.mapArrayOfPolicyModel(response);
                }
            )
        )
    }
    
    mapArrayOfPolicyModel(response: any): PolicyModel[] {
        const responseArray = [];
        for(const key in response) {
            const res = (response as any)[key]
            if(response.hasOwnProperty(key)) {
                responseArray.push({
                    id: res.id,
                    name: res.nume,
                    moduleActive: res.module_active,
                })
            }
        }
        return responseArray;
    }

    postClonedPolicy(requestBody: PolicyModel): any {
        return this.http.post(this.baseUrl + "/api/v1/add-policy", ({nume: requestBody.name, module_active: requestBody.moduleActive}));
    }

    deletePolicy(policyId: number): any {
        return this.http.delete(this.baseUrl + "/api/v1/delete-policy-by-id/" + policyId);
    }

    patchPolicy(requestBody: PolicyModel): any {
        return this.http.patch(this.baseUrl + "/api/v1/patch-policy/" + requestBody.id,
        ({
            nume: requestBody.name, module_active: requestBody.moduleActive
        })).pipe(
            map(
                response => {
                    console.log(response);
                }
            )
        )
    }


}