using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DataAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {
       
            private readonly DataDBContext _dbContext;
            public DataController(DataDBContext dBContext)
            {
                _dbContext = dBContext;
            }

            [HttpGet]
            public async Task<IActionResult> Get()
            {
                var Data = await _dbContext.TblData.ToListAsync();
                return Ok(Data);
            }

            [HttpPost]
            public async Task<IActionResult> Post(TblDatum newTblDatum)
            {
            _dbContext.TblData.Add(newTblDatum);
            await _dbContext.SaveChangesAsync();
            return Ok(newTblDatum);
             }

            [HttpGet]
            [Route("{id:int}")]
            public async Task<IActionResult> Get(int id)
            {
            var DataId = await _dbContext
            .TblData.Where(_ => _.Id == id)
            .FirstOrDefaultAsync();
            return Ok(DataId);
            }


            [HttpPut]
            public async Task<IActionResult> Put(TblDatum dataToUpdate)
            {
            _dbContext.TblData.Update(dataToUpdate);
            await _dbContext.SaveChangesAsync();
            return Ok(dataToUpdate);
            }


        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var dataToDelete = await _dbContext.TblData.FindAsync(id);
            if (dataToDelete == null)
            {
                return NotFound();
            }
            _dbContext.TblData.Remove(dataToDelete);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

    }
    }

