class Promise {
  constructor(executor) {
    this.status= 'pending';
    this.value=undefined;
    this.reason=undefined;
    this.onResolvedCallback=[];
    this.onRejectedCallback=[];
    let resolve =(value)=>{
      if(this.status==='pending') {
        this.status='fullFilled'
        this.value=value;
        //
        this.onResolvedCallbacks.foreach(fn=>fn())
      }
    }

    let reject=(value)=>{
      if(this.status=='pending') {
        this.status='rejected'
        this.onRejectedCallbacks.foreach(fn=>fn())
      }
    }

    try {
      
    }
  }
}