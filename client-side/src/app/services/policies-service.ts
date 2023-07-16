import { Injectable } from "@angular/core";
import { PolicyModel } from "../models/policy-model";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

@Injectable({providedIn: "root"})
export class PoliciesService {

    constructor(private http: HttpClient) {

    }

    getAllPolicies(): Observable<PolicyModel[]> {
        return this.http.get("http://localhost:3000/api/v1/get-policies")
        .pipe(
            map(
                response => {
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
            )
        )
    }

}