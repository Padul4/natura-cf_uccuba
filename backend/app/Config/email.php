<?php

class EmailConfig {

    public $default = array(
        'delivery' => 'smtp',
        'port'=>'25',
        'timeout'=>'30',
        'host' => 'localhost',
        'username'=>'mailbrave',
        'password'=>'macacoloco134679',
        'client' => 'brave.ag',
        'emailFormat' => 'html',
        'from' => array('noreply@brave.ag' =>'Natura'),
    );

    public $default_sendgrid = array(
		'delivery' => 'smtp',
		'port'=>'587',
		'timeout'=>'30',
		'host' => 'smtp.sendgrid.net',
		'username'=>'mailbrave',
		'password'=>'macacoloco134679',
		'client' => 'brave.ag',
		'emailFormat' => 'html',
		'from' => array('pm@brave.ag' =>'Natura'),
    );

	public $default_brave = array(
         'transport' => 'Smtp',
         'host' => 'ssl://mail.brave.ag',
         'port' => 465,
         'username' => 'noreply@brave.ag',
         'password' => 'macacoloco',
         'emailFormat' => 'html',
         'from' => array('pm@theapes.cc' =>'natura'),
    );
}
