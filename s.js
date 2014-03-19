var rain=0; 
function useItem(x, y, z, itemId, blockId, side) 
{ 
if(blockId==79&&rain==0) 
{ 
rain=1; 
} 
else if(blockId&&rain==1) 
{ 
rain=0; 
} 
} 
  
function modTick() 
{ 
if (rain==1) 
{ 
setTile(getPlayerX()+1, getPlayerY()+2, getPlayerZ(), 9); 
setTile(getPlayerX(), getPlayerY()+2, getPlayerZ()+1, 9); 
setTile(getPlayerX()+1, getPlayerY()+2, getPlayerZ()+1, 9); 
setTile(getPlayerX(), getPlayerY()+2, getPlayerZ()-1, 9); 
setTile(getPlayerX()-1, getPlayerY()+2, getPlayerZ(), 9); 
setTile(getPlayerX()-1, getPlayerY()+2, getPlayerZ()-1, 9); 
  
Level.destroyBlock(getPlayerX()+1, getPlayerY()+2, getPlayerZ()); 
Level.destroyBlock(getPlayerX(), getPlayerY()+2, getPlayerZ()+1); 
Level.destroyBlock(getPlayerX()+1, getPlayerY()+2, getPlayerZ()+1); 
Level.destroyBlock(getPlayerX(), getPlayerY()+2, getPlayerZ()-1); 
Level.destroyBlock(getPlayerX()-1, getPlayerY()+2, getPlayerZ()); 
Level.destroyBlock(getPlayerX()-1, getPlayerY()+2, getPlayerZ()-1); 
} 
if (getTile (getPlayerX (),getPlayerY ()-1.6,getPlayerZ ()) == 78 && rain == 1)
{
setTile(getPlayerX()+1, getPlayerY()+2, getPlayerZ(), 80); 
setTile(getPlayerX(), getPlayerY()+2, getPlayerZ()+1, 80); 
setTile(getPlayerX()+1, getPlayerY()+2, getPlayerZ()+1, 80); 
setTile(getPlayerX(), getPlayerY()+2, getPlayerZ()-1, 80); 
setTile(getPlayerX()-1, getPlayerY()+2, getPlayerZ(), 80); 
setTile(getPlayerX()-1, getPlayerY()+2, getPlayerZ()-1, 80); 
  
Level.destroyBlock(getPlayerX()+1, getPlayerY()+2, getPlayerZ()); 
Level.destroyBlock(getPlayerX(), getPlayerY()+2, getPlayerZ()+1); 
Level.destroyBlock(getPlayerX()+1, getPlayerY()+2, getPlayerZ()+1); 
Level.destroyBlock(getPlayerX(), getPlayerY()+2, getPlayerZ()-1); 
Level.destroyBlock(getPlayerX()-1, getPlayerY()+2, getPlayerZ()); 
Level.destroyBlock(getPlayerX()-1, getPlayerY()+2, getPlayerZ()-1); 
}
else if (rain == 1)
{
setTile(getPlayerX()+1, getPlayerY()+2, getPlayerZ(), 9); 
setTile(getPlayerX(), getPlayerY()+2, getPlayerZ()+1, 9); 
setTile(getPlayerX()+1, getPlayerY()+2, getPlayerZ()+1, 9); 
setTile(getPlayerX(), getPlayerY()+2, getPlayerZ()-1, 9); 
setTile(getPlayerX()-1, getPlayerY()+2, getPlayerZ(), 9); 
setTile(getPlayerX()-1, getPlayerY()+2, getPlayerZ()-1, 9); 
  
Level.destroyBlock(getPlayerX()+1, getPlayerY()+2, getPlayerZ()); 
Level.destroyBlock(getPlayerX(), getPlayerY()+2, getPlayerZ()+1); 
Level.destroyBlock(getPlayerX()+1, getPlayerY()+2, getPlayerZ()+1); 
Level.destroyBlock(getPlayerX(), getPlayerY()+2, getPlayerZ()-1); 
Level.destroyBlock(getPlayerX()-1, getPlayerY()+2, getPlayerZ()); 
Level.destroyBlock(getPlayerX()-1, getPlayerY()+2, getPlayerZ()-1);
}
}

