const mysql = require("../config/database");

const mapper = {
  list: () => {
    return new Promise((resolve, reject) => {
      mysql.connection((conn)=>{
        const sql = "select * from nodejs_article order by id desc";
        conn.query(sql,(error,rows)=>{
          if(error) throw error;
          resolve(rows);
        })
      })
    });
  },

  get : (id) =>{
    return new Promise((resolve,reject)=>{
      mysql.connection((conn)=>{
        const sql = "select * from nodejs_article where id = ?";
        const param = [id]
        conn.query(sql,param,(error,rows)=>{
          if(error) throw error;
          resolve(rows);
        })
      })
    })
  },

  new : (body) =>{
    return new Promise((resolve,reject)=>{
      mysql.connection((conn)=>{
        const sql = "insert into nodejs_article(title,body) values(?,?)";
        const param = [body.title, body.body];
  
        conn.query(sql,param,(error,rows)=>{
          if(error || rows.affectedRows == 0){
            conn.rollback();
            resolve({success : false});
          } 
          resolve({success : true, id : rows.insertId});
        })
      })
    })
  },

  delete : (id)=>{
    return new Promise((resolve,reject)=>{
      mysql.connection((conn)=>{
        const sql = "delete from nodejs_article where id = ?";
        const param = [id]

        conn.query(sql,param,(error,rows)=>{
          if(error || rows.affectedRows == 0){
            conn.rollback();
            resolve({success : false});
          }
          resolve({success : true});
        })
      })
    })
  },

  modify : (body,id)=>{
    return new Promise((resolve,reject)=>{

      mysql.connection((conn)=>{
        const sql = "update nodejs_article set title = ?, body = ? where id = ?";
        const param = [body.title, body.body, id];

        conn.query(sql,param, (error,rows)=>{
          if(error || rows.affectedRows == 0){
            conn.rollback();
            resolve({success : false})
          }
          resolve({success : true})
        })
      })
    })
  }
};

module.exports = mapper;
