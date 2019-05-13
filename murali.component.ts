import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
    selector:'app-murali',
    templateUrl:'./murali.component.html'

})
export class MuraliComponent
{
    constructor(private httpObj:HttpClient)
    {

    }
    public s1:number=0;
    public s2:string="";
    public s3:number=0;
    public details:any[];


   public getdata()
    {
        let url:string="http://localhost:3032/no";
        this.httpObj.get(url).subscribe((response:any)=>
        {
            this.details=response;
        });

    }

    public senddata()
    {
        let obj:any={};
        obj.sno=this.s1;
        obj.name=this.s2;
        obj.marks=this.s3;


        let x:number=this.details.findIndex(item=>item.sno==this.s1);
            if(x>0)
            {
                alert("Student number already exist");
                return;
            }

        let url:string="http://localhost:3032/data";
        this.httpObj.post(url,obj).subscribe((res:any)=>
        {   console.log(res.status);
            this.getdata();
        })
    }

    public update()
    {
        let url="http://localhost:3032/update";
        let obj:any={};
        obj.sno=this.s1;
        obj.name=this.s2;
        obj.marks=this.s3;
        this.httpObj.put(url,obj).subscribe((res:any)=>
        {
            console.log(res.status);
			this.getdata();
        })
    }
    
    public delete(no:number)
    {
        let url:any="http://localhost:3032/delete/"+no;
       this.httpObj.delete(url).subscribe((res:any)=>
       {
           console.log(res);
       this.getdata();
        } )
    }

}






















