var example1 = new Vue({
    el: '#example-1',
    data: 
    {
      numbers : 0,
      cells_in_row : 10,
      prime_numbers : []
    },
    created: function()
    {
        this.numbers = 100;
    },
    computed:
    {
        rows : function()
        {
            return Math.ceil(this.numbers / this.cells_in_row)
        },
        last_row_ceil : function()
        {
            l_r_c = this.numbers % this.cells_in_row
            if(l_r_c == 0)
            {
                l_r_c = this.cells_in_row
            }
            return l_r_c
        }    
    },
    watch:
    {
        numbers: function(numbers)
        {
            this.prime_numbers = []
            for(let i = 0; i<=numbers; i++)
            {
                this.prime_numbers.push(null)
            }
        }
    },
    methods:
    {
        get_prime(i)
        {
            if (this.prime_numbers[i] === null)
            {
                this.prime_numbers.splice(i, 1, true)
                for(j=i**2; j<=this.numbers; j+=i)
                {
                    this.prime_numbers.splice(j, 1, false)
                }
            }
            if(i<=this.numbers)
            {
                if(this.prime_numbers[i] === true && i**2<=this.numbers)
                {
                    setTimeout(this.get_prime,1500, ++i)    
                }
                else if(this.prime_numbers[i] === true && i<=this.numbers)
                {
                    setTimeout(this.get_prime,300, ++i)    
                }
                else
                {
                    setTimeout(this.get_prime,100, ++i)
                }
            }
        },
        get_prime_numbers: function()
        {

            this.prime_numbers.splice(1, 1, false)
            this.prime_numbers.splice(0, 1, false)
            setTimeout(this.get_prime,1500, 2)
        }
    }
  })