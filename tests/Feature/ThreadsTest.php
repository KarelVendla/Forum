<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ThreadsTest extends TestCase
{

    use DatabaseMigrations;

    /** @test */
    public function A_User_Can_View_All_Threads()
    {
        $thread = factory('App\Thread')->create();

        $response = $this->get('/threads');
        $response->assertSee($thread->title);
    }

    /** @test */
    public function A_User_Can_Read_A_Single_Thread() 
    {
        $thread = factory('App\Thread')->create();

        $response = $this->get('/threads/'. $thread->id);
        $response->assertSee($thread->title);
    }
}
