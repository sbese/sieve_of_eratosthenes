var example1 = new Vue({
    el: '#example-1',
    data: 
    {
      numbers : 100
    },
    computed:
    {
        rows : function()
        {
            return Math.ceil(this.numbers / 10)
        },
        last_row_ceil : function()
        {
            l_r_c = this.numbers % 10
            if(l_r_c == 0)
            {
                l_r_c = 10
            }
            return l_r_c
        }
    }
  })